import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3986 } from "./fragment3986";
import type { FragmentToken3987 } from "./fragment3987";

export const FRAGMENT_3988 = gql(`
  fragment Fragment3988 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult3988 = ResultOf<typeof FRAGMENT_3988>;
type FragmentSelf3988 = NonNullable<FragmentResult3988>;

export type FragmentToken3988 =
  | FragmentSelf3988["__typename"]
  | FragmentSelf3988["typenameHint"] | FragmentToken3986 | FragmentToken3987;
