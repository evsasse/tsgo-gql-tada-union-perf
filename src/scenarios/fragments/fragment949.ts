import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken947 } from "./fragment947";
import type { FragmentToken948 } from "./fragment948";

export const FRAGMENT_949 = gql(`
  fragment Fragment949 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult949 = ResultOf<typeof FRAGMENT_949>;
type FragmentSelf949 = NonNullable<FragmentResult949>;

export type FragmentToken949 =
  | FragmentSelf949["__typename"]
  | FragmentSelf949["typenameHint"] | FragmentToken947 | FragmentToken948;
