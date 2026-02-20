import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4019 } from "./fragment4019";
import type { FragmentToken4020 } from "./fragment4020";

export const FRAGMENT_4021 = gql(`
  fragment Fragment4021 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult4021 = ResultOf<typeof FRAGMENT_4021>;
type FragmentSelf4021 = NonNullable<FragmentResult4021>;

export type FragmentToken4021 =
  | FragmentSelf4021["__typename"]
  | FragmentSelf4021["typenameHint"] | FragmentToken4019 | FragmentToken4020;
