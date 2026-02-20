import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4357 } from "./fragment4357";
import type { FragmentToken4358 } from "./fragment4358";

export const FRAGMENT_4359 = gql(`
  fragment Fragment4359 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult4359 = ResultOf<typeof FRAGMENT_4359>;
type FragmentSelf4359 = NonNullable<FragmentResult4359>;

export type FragmentToken4359 =
  | FragmentSelf4359["__typename"]
  | FragmentSelf4359["typenameHint"] | FragmentToken4357 | FragmentToken4358;
