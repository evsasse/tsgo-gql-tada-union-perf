import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4991 } from "./fragment4991";
import type { FragmentToken4992 } from "./fragment4992";

export const FRAGMENT_4993 = gql(`
  fragment Fragment4993 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult4993 = ResultOf<typeof FRAGMENT_4993>;
type FragmentSelf4993 = NonNullable<FragmentResult4993>;

export type FragmentToken4993 =
  | FragmentSelf4993["__typename"]
  | FragmentSelf4993["typenameHint"] | FragmentToken4991 | FragmentToken4992;
