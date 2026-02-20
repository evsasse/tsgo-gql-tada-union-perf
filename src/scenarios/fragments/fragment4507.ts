import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4505 } from "./fragment4505";
import type { FragmentToken4506 } from "./fragment4506";

export const FRAGMENT_4507 = gql(`
  fragment Fragment4507 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult4507 = ResultOf<typeof FRAGMENT_4507>;
type FragmentSelf4507 = NonNullable<FragmentResult4507>;

export type FragmentToken4507 =
  | FragmentSelf4507["__typename"]
  | FragmentSelf4507["typenameHint"] | FragmentToken4505 | FragmentToken4506;
