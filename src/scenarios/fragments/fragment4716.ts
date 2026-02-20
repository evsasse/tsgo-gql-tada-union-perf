import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4714 } from "./fragment4714";
import type { FragmentToken4715 } from "./fragment4715";

export const FRAGMENT_4716 = gql(`
  fragment Fragment4716 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult4716 = ResultOf<typeof FRAGMENT_4716>;
type FragmentSelf4716 = NonNullable<FragmentResult4716>;

export type FragmentToken4716 =
  | FragmentSelf4716["__typename"]
  | FragmentSelf4716["typenameHint"] | FragmentToken4714 | FragmentToken4715;
