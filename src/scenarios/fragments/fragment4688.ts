import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4686 } from "./fragment4686";
import type { FragmentToken4687 } from "./fragment4687";

export const FRAGMENT_4688 = gql(`
  fragment Fragment4688 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult4688 = ResultOf<typeof FRAGMENT_4688>;
type FragmentSelf4688 = NonNullable<FragmentResult4688>;

export type FragmentToken4688 =
  | FragmentSelf4688["__typename"]
  | FragmentSelf4688["typenameHint"] | FragmentToken4686 | FragmentToken4687;
