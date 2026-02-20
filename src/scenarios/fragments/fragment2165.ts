import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2163 } from "./fragment2163";
import type { FragmentToken2164 } from "./fragment2164";

export const FRAGMENT_2165 = gql(`
  fragment Fragment2165 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult2165 = ResultOf<typeof FRAGMENT_2165>;
type FragmentSelf2165 = NonNullable<FragmentResult2165>;

export type FragmentToken2165 =
  | FragmentSelf2165["__typename"]
  | FragmentSelf2165["typenameHint"] | FragmentToken2163 | FragmentToken2164;
