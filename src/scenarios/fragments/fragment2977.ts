import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2975 } from "./fragment2975";
import type { FragmentToken2976 } from "./fragment2976";

export const FRAGMENT_2977 = gql(`
  fragment Fragment2977 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult2977 = ResultOf<typeof FRAGMENT_2977>;
type FragmentSelf2977 = NonNullable<FragmentResult2977>;

export type FragmentToken2977 =
  | FragmentSelf2977["__typename"]
  | FragmentSelf2977["typenameHint"] | FragmentToken2975 | FragmentToken2976;
