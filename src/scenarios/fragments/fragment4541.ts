import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4539 } from "./fragment4539";
import type { FragmentToken4540 } from "./fragment4540";

export const FRAGMENT_4541 = gql(`
  fragment Fragment4541 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult4541 = ResultOf<typeof FRAGMENT_4541>;
type FragmentSelf4541 = NonNullable<FragmentResult4541>;

export type FragmentToken4541 =
  | FragmentSelf4541["__typename"]
  | FragmentSelf4541["typenameHint"] | FragmentToken4539 | FragmentToken4540;
