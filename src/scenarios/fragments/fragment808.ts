import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken806 } from "./fragment806";
import type { FragmentToken807 } from "./fragment807";

export const FRAGMENT_808 = gql(`
  fragment Fragment808 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult808 = ResultOf<typeof FRAGMENT_808>;
type FragmentSelf808 = NonNullable<FragmentResult808>;

export type FragmentToken808 =
  | FragmentSelf808["__typename"]
  | FragmentSelf808["typenameHint"] | FragmentToken806 | FragmentToken807;
