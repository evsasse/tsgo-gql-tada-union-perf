import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4731 } from "./fragment4731";
import type { FragmentToken4732 } from "./fragment4732";

export const FRAGMENT_4733 = gql(`
  fragment Fragment4733 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult4733 = ResultOf<typeof FRAGMENT_4733>;
type FragmentSelf4733 = NonNullable<FragmentResult4733>;

export type FragmentToken4733 =
  | FragmentSelf4733["__typename"]
  | FragmentSelf4733["typenameHint"] | FragmentToken4731 | FragmentToken4732;
