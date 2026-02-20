import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken635 } from "./fragment635";
import type { FragmentToken636 } from "./fragment636";

export const FRAGMENT_637 = gql(`
  fragment Fragment637 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult637 = ResultOf<typeof FRAGMENT_637>;
type FragmentSelf637 = NonNullable<FragmentResult637>;

export type FragmentToken637 =
  | FragmentSelf637["__typename"]
  | FragmentSelf637["typenameHint"] | FragmentToken635 | FragmentToken636;
