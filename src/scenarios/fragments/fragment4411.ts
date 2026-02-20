import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4409 } from "./fragment4409";
import type { FragmentToken4410 } from "./fragment4410";

export const FRAGMENT_4411 = gql(`
  fragment Fragment4411 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult4411 = ResultOf<typeof FRAGMENT_4411>;
type FragmentSelf4411 = NonNullable<FragmentResult4411>;

export type FragmentToken4411 =
  | FragmentSelf4411["__typename"]
  | FragmentSelf4411["typenameHint"] | FragmentToken4409 | FragmentToken4410;
