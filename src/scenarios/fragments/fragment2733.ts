import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2731 } from "./fragment2731";
import type { FragmentToken2732 } from "./fragment2732";

export const FRAGMENT_2733 = gql(`
  fragment Fragment2733 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult2733 = ResultOf<typeof FRAGMENT_2733>;
type FragmentSelf2733 = NonNullable<FragmentResult2733>;

export type FragmentToken2733 =
  | FragmentSelf2733["__typename"]
  | FragmentSelf2733["typenameHint"] | FragmentToken2731 | FragmentToken2732;
