import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken010 } from "./fragment010";
import type { FragmentToken011 } from "./fragment011";

export const FRAGMENT_012 = gql(`
  fragment Fragment012 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult012 = ResultOf<typeof FRAGMENT_012>;
type FragmentSelf012 = NonNullable<FragmentResult012>;

export type FragmentToken012 =
  | FragmentSelf012["__typename"]
  | FragmentSelf012["typenameHint"] | FragmentToken010 | FragmentToken011;
