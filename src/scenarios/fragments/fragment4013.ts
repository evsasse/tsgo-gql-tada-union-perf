import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4011 } from "./fragment4011";
import type { FragmentToken4012 } from "./fragment4012";

export const FRAGMENT_4013 = gql(`
  fragment Fragment4013 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult4013 = ResultOf<typeof FRAGMENT_4013>;
type FragmentSelf4013 = NonNullable<FragmentResult4013>;

export type FragmentToken4013 =
  | FragmentSelf4013["__typename"]
  | FragmentSelf4013["typenameHint"] | FragmentToken4011 | FragmentToken4012;
