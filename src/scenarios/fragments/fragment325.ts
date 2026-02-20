import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken323 } from "./fragment323";
import type { FragmentToken324 } from "./fragment324";

export const FRAGMENT_325 = gql(`
  fragment Fragment325 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult325 = ResultOf<typeof FRAGMENT_325>;
type FragmentSelf325 = NonNullable<FragmentResult325>;

export type FragmentToken325 =
  | FragmentSelf325["__typename"]
  | FragmentSelf325["typenameHint"] | FragmentToken323 | FragmentToken324;
