import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4974 } from "./fragment4974";
import type { FragmentToken4975 } from "./fragment4975";

export const FRAGMENT_4976 = gql(`
  fragment Fragment4976 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult4976 = ResultOf<typeof FRAGMENT_4976>;
type FragmentSelf4976 = NonNullable<FragmentResult4976>;

export type FragmentToken4976 =
  | FragmentSelf4976["__typename"]
  | FragmentSelf4976["typenameHint"] | FragmentToken4974 | FragmentToken4975;
