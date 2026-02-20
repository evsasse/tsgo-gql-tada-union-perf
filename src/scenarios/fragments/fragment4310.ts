import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4308 } from "./fragment4308";
import type { FragmentToken4309 } from "./fragment4309";

export const FRAGMENT_4310 = gql(`
  fragment Fragment4310 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult4310 = ResultOf<typeof FRAGMENT_4310>;
type FragmentSelf4310 = NonNullable<FragmentResult4310>;

export type FragmentToken4310 =
  | FragmentSelf4310["__typename"]
  | FragmentSelf4310["typenameHint"] | FragmentToken4308 | FragmentToken4309;
