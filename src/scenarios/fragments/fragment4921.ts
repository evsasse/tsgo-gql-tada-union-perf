import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4919 } from "./fragment4919";
import type { FragmentToken4920 } from "./fragment4920";

export const FRAGMENT_4921 = gql(`
  fragment Fragment4921 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult4921 = ResultOf<typeof FRAGMENT_4921>;
type FragmentSelf4921 = NonNullable<FragmentResult4921>;

export type FragmentToken4921 =
  | FragmentSelf4921["__typename"]
  | FragmentSelf4921["typenameHint"] | FragmentToken4919 | FragmentToken4920;
