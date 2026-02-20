import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2723 } from "./fragment2723";
import type { FragmentToken2724 } from "./fragment2724";

export const FRAGMENT_2725 = gql(`
  fragment Fragment2725 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult2725 = ResultOf<typeof FRAGMENT_2725>;
type FragmentSelf2725 = NonNullable<FragmentResult2725>;

export type FragmentToken2725 =
  | FragmentSelf2725["__typename"]
  | FragmentSelf2725["typenameHint"] | FragmentToken2723 | FragmentToken2724;
