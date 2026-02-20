import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3753 } from "./fragment3753";
import type { FragmentToken3754 } from "./fragment3754";

export const FRAGMENT_3755 = gql(`
  fragment Fragment3755 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult3755 = ResultOf<typeof FRAGMENT_3755>;
type FragmentSelf3755 = NonNullable<FragmentResult3755>;

export type FragmentToken3755 =
  | FragmentSelf3755["__typename"]
  | FragmentSelf3755["typenameHint"] | FragmentToken3753 | FragmentToken3754;
