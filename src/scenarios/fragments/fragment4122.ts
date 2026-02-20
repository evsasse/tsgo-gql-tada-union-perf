import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4120 } from "./fragment4120";
import type { FragmentToken4121 } from "./fragment4121";

export const FRAGMENT_4122 = gql(`
  fragment Fragment4122 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult4122 = ResultOf<typeof FRAGMENT_4122>;
type FragmentSelf4122 = NonNullable<FragmentResult4122>;

export type FragmentToken4122 =
  | FragmentSelf4122["__typename"]
  | FragmentSelf4122["typenameHint"] | FragmentToken4120 | FragmentToken4121;
