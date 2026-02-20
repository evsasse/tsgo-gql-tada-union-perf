import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3972 } from "./fragment3972";
import type { FragmentToken3973 } from "./fragment3973";

export const FRAGMENT_3974 = gql(`
  fragment Fragment3974 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult3974 = ResultOf<typeof FRAGMENT_3974>;
type FragmentSelf3974 = NonNullable<FragmentResult3974>;

export type FragmentToken3974 =
  | FragmentSelf3974["__typename"]
  | FragmentSelf3974["typenameHint"] | FragmentToken3972 | FragmentToken3973;
