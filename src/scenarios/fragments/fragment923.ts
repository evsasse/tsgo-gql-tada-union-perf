import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken921 } from "./fragment921";
import type { FragmentToken922 } from "./fragment922";

export const FRAGMENT_923 = gql(`
  fragment Fragment923 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult923 = ResultOf<typeof FRAGMENT_923>;
type FragmentSelf923 = NonNullable<FragmentResult923>;

export type FragmentToken923 =
  | FragmentSelf923["__typename"]
  | FragmentSelf923["typenameHint"] | FragmentToken921 | FragmentToken922;
