import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4003 } from "./fragment4003";
import type { FragmentToken4004 } from "./fragment4004";

export const FRAGMENT_4005 = gql(`
  fragment Fragment4005 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult4005 = ResultOf<typeof FRAGMENT_4005>;
type FragmentSelf4005 = NonNullable<FragmentResult4005>;

export type FragmentToken4005 =
  | FragmentSelf4005["__typename"]
  | FragmentSelf4005["typenameHint"] | FragmentToken4003 | FragmentToken4004;
