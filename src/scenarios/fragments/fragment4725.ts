import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4723 } from "./fragment4723";
import type { FragmentToken4724 } from "./fragment4724";

export const FRAGMENT_4725 = gql(`
  fragment Fragment4725 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult4725 = ResultOf<typeof FRAGMENT_4725>;
type FragmentSelf4725 = NonNullable<FragmentResult4725>;

export type FragmentToken4725 =
  | FragmentSelf4725["__typename"]
  | FragmentSelf4725["typenameHint"] | FragmentToken4723 | FragmentToken4724;
