import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4917 } from "./fragment4917";
import type { FragmentToken4918 } from "./fragment4918";

export const FRAGMENT_4919 = gql(`
  fragment Fragment4919 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult4919 = ResultOf<typeof FRAGMENT_4919>;
type FragmentSelf4919 = NonNullable<FragmentResult4919>;

export type FragmentToken4919 =
  | FragmentSelf4919["__typename"]
  | FragmentSelf4919["typenameHint"] | FragmentToken4917 | FragmentToken4918;
