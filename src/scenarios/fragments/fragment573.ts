import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken571 } from "./fragment571";
import type { FragmentToken572 } from "./fragment572";

export const FRAGMENT_573 = gql(`
  fragment Fragment573 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult573 = ResultOf<typeof FRAGMENT_573>;
type FragmentSelf573 = NonNullable<FragmentResult573>;

export type FragmentToken573 =
  | FragmentSelf573["__typename"]
  | FragmentSelf573["typenameHint"] | FragmentToken571 | FragmentToken572;
