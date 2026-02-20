import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4054 } from "./fragment4054";
import type { FragmentToken4055 } from "./fragment4055";

export const FRAGMENT_4056 = gql(`
  fragment Fragment4056 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult4056 = ResultOf<typeof FRAGMENT_4056>;
type FragmentSelf4056 = NonNullable<FragmentResult4056>;

export type FragmentToken4056 =
  | FragmentSelf4056["__typename"]
  | FragmentSelf4056["typenameHint"] | FragmentToken4054 | FragmentToken4055;
