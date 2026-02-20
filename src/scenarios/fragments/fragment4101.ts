import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4099 } from "./fragment4099";
import type { FragmentToken4100 } from "./fragment4100";

export const FRAGMENT_4101 = gql(`
  fragment Fragment4101 on Member180 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_180
    memberCount_180
    memberMetric_180
  }
`);

type FragmentResult4101 = ResultOf<typeof FRAGMENT_4101>;
type FragmentSelf4101 = NonNullable<FragmentResult4101>;

export type FragmentToken4101 =
  | FragmentSelf4101["__typename"]
  | FragmentSelf4101["typenameHint"] | FragmentToken4099 | FragmentToken4100;
