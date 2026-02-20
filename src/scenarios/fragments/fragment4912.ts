import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4910 } from "./fragment4910";
import type { FragmentToken4911 } from "./fragment4911";

export const FRAGMENT_4912 = gql(`
  fragment Fragment4912 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult4912 = ResultOf<typeof FRAGMENT_4912>;
type FragmentSelf4912 = NonNullable<FragmentResult4912>;

export type FragmentToken4912 =
  | FragmentSelf4912["__typename"]
  | FragmentSelf4912["typenameHint"] | FragmentToken4910 | FragmentToken4911;
