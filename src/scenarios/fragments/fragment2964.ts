import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2962 } from "./fragment2962";
import type { FragmentToken2963 } from "./fragment2963";

export const FRAGMENT_2964 = gql(`
  fragment Fragment2964 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult2964 = ResultOf<typeof FRAGMENT_2964>;
type FragmentSelf2964 = NonNullable<FragmentResult2964>;

export type FragmentToken2964 =
  | FragmentSelf2964["__typename"]
  | FragmentSelf2964["typenameHint"] | FragmentToken2962 | FragmentToken2963;
