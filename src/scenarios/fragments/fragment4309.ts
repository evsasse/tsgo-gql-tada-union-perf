import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4307 } from "./fragment4307";
import type { FragmentToken4308 } from "./fragment4308";

export const FRAGMENT_4309 = gql(`
  fragment Fragment4309 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult4309 = ResultOf<typeof FRAGMENT_4309>;
type FragmentSelf4309 = NonNullable<FragmentResult4309>;

export type FragmentToken4309 =
  | FragmentSelf4309["__typename"]
  | FragmentSelf4309["typenameHint"] | FragmentToken4307 | FragmentToken4308;
