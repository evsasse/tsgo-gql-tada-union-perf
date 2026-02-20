import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4506 } from "./fragment4506";
import type { FragmentToken4507 } from "./fragment4507";

export const FRAGMENT_4508 = gql(`
  fragment Fragment4508 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult4508 = ResultOf<typeof FRAGMENT_4508>;
type FragmentSelf4508 = NonNullable<FragmentResult4508>;

export type FragmentToken4508 =
  | FragmentSelf4508["__typename"]
  | FragmentSelf4508["typenameHint"] | FragmentToken4506 | FragmentToken4507;
