import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2863 } from "./fragment2863";
import type { FragmentToken2864 } from "./fragment2864";

export const FRAGMENT_2865 = gql(`
  fragment Fragment2865 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult2865 = ResultOf<typeof FRAGMENT_2865>;
type FragmentSelf2865 = NonNullable<FragmentResult2865>;

export type FragmentToken2865 =
  | FragmentSelf2865["__typename"]
  | FragmentSelf2865["typenameHint"] | FragmentToken2863 | FragmentToken2864;
