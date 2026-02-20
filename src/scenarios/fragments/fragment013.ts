import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken011 } from "./fragment011";
import type { FragmentToken012 } from "./fragment012";

export const FRAGMENT_013 = gql(`
  fragment Fragment013 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult013 = ResultOf<typeof FRAGMENT_013>;
type FragmentSelf013 = NonNullable<FragmentResult013>;

export type FragmentToken013 =
  | FragmentSelf013["__typename"]
  | FragmentSelf013["typenameHint"] | FragmentToken011 | FragmentToken012;
