import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2464 } from "./fragment2464";
import type { FragmentToken2465 } from "./fragment2465";

export const FRAGMENT_2466 = gql(`
  fragment Fragment2466 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult2466 = ResultOf<typeof FRAGMENT_2466>;
type FragmentSelf2466 = NonNullable<FragmentResult2466>;

export type FragmentToken2466 =
  | FragmentSelf2466["__typename"]
  | FragmentSelf2466["typenameHint"] | FragmentToken2464 | FragmentToken2465;
