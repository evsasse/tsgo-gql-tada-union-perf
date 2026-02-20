import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4538 } from "./fragment4538";
import type { FragmentToken4539 } from "./fragment4539";

export const FRAGMENT_4540 = gql(`
  fragment Fragment4540 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult4540 = ResultOf<typeof FRAGMENT_4540>;
type FragmentSelf4540 = NonNullable<FragmentResult4540>;

export type FragmentToken4540 =
  | FragmentSelf4540["__typename"]
  | FragmentSelf4540["typenameHint"] | FragmentToken4538 | FragmentToken4539;
