import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2160 } from "./fragment2160";
import type { FragmentToken2161 } from "./fragment2161";

export const FRAGMENT_2162 = gql(`
  fragment Fragment2162 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult2162 = ResultOf<typeof FRAGMENT_2162>;
type FragmentSelf2162 = NonNullable<FragmentResult2162>;

export type FragmentToken2162 =
  | FragmentSelf2162["__typename"]
  | FragmentSelf2162["typenameHint"] | FragmentToken2160 | FragmentToken2161;
