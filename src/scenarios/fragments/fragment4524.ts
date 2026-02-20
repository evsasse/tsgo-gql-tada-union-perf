import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4522 } from "./fragment4522";
import type { FragmentToken4523 } from "./fragment4523";

export const FRAGMENT_4524 = gql(`
  fragment Fragment4524 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult4524 = ResultOf<typeof FRAGMENT_4524>;
type FragmentSelf4524 = NonNullable<FragmentResult4524>;

export type FragmentToken4524 =
  | FragmentSelf4524["__typename"]
  | FragmentSelf4524["typenameHint"] | FragmentToken4522 | FragmentToken4523;
