import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken918 } from "./fragment918";
import type { FragmentToken919 } from "./fragment919";

export const FRAGMENT_920 = gql(`
  fragment Fragment920 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult920 = ResultOf<typeof FRAGMENT_920>;
type FragmentSelf920 = NonNullable<FragmentResult920>;

export type FragmentToken920 =
  | FragmentSelf920["__typename"]
  | FragmentSelf920["typenameHint"] | FragmentToken918 | FragmentToken919;
