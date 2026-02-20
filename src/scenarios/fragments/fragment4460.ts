import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4458 } from "./fragment4458";
import type { FragmentToken4459 } from "./fragment4459";

export const FRAGMENT_4460 = gql(`
  fragment Fragment4460 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult4460 = ResultOf<typeof FRAGMENT_4460>;
type FragmentSelf4460 = NonNullable<FragmentResult4460>;

export type FragmentToken4460 =
  | FragmentSelf4460["__typename"]
  | FragmentSelf4460["typenameHint"] | FragmentToken4458 | FragmentToken4459;
