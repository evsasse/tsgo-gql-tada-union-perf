import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4309 } from "./fragment4309";
import type { FragmentToken4310 } from "./fragment4310";

export const FRAGMENT_4311 = gql(`
  fragment Fragment4311 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult4311 = ResultOf<typeof FRAGMENT_4311>;
type FragmentSelf4311 = NonNullable<FragmentResult4311>;

export type FragmentToken4311 =
  | FragmentSelf4311["__typename"]
  | FragmentSelf4311["typenameHint"] | FragmentToken4309 | FragmentToken4310;
