import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2954 } from "./fragment2954";
import type { FragmentToken2955 } from "./fragment2955";

export const FRAGMENT_2956 = gql(`
  fragment Fragment2956 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult2956 = ResultOf<typeof FRAGMENT_2956>;
type FragmentSelf2956 = NonNullable<FragmentResult2956>;

export type FragmentToken2956 =
  | FragmentSelf2956["__typename"]
  | FragmentSelf2956["typenameHint"] | FragmentToken2954 | FragmentToken2955;
