import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2036 } from "./fragment2036";
import type { FragmentToken2037 } from "./fragment2037";

export const FRAGMENT_2038 = gql(`
  fragment Fragment2038 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult2038 = ResultOf<typeof FRAGMENT_2038>;
type FragmentSelf2038 = NonNullable<FragmentResult2038>;

export type FragmentToken2038 =
  | FragmentSelf2038["__typename"]
  | FragmentSelf2038["typenameHint"] | FragmentToken2036 | FragmentToken2037;
