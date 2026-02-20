import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4337 } from "./fragment4337";
import type { FragmentToken4338 } from "./fragment4338";

export const FRAGMENT_4339 = gql(`
  fragment Fragment4339 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult4339 = ResultOf<typeof FRAGMENT_4339>;
type FragmentSelf4339 = NonNullable<FragmentResult4339>;

export type FragmentToken4339 =
  | FragmentSelf4339["__typename"]
  | FragmentSelf4339["typenameHint"] | FragmentToken4337 | FragmentToken4338;
