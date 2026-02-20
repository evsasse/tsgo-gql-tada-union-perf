import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3863 } from "./fragment3863";
import type { FragmentToken3864 } from "./fragment3864";

export const FRAGMENT_3865 = gql(`
  fragment Fragment3865 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult3865 = ResultOf<typeof FRAGMENT_3865>;
type FragmentSelf3865 = NonNullable<FragmentResult3865>;

export type FragmentToken3865 =
  | FragmentSelf3865["__typename"]
  | FragmentSelf3865["typenameHint"] | FragmentToken3863 | FragmentToken3864;
