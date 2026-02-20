import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken500 } from "./fragment500";
import type { FragmentToken501 } from "./fragment501";

export const FRAGMENT_502 = gql(`
  fragment Fragment502 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult502 = ResultOf<typeof FRAGMENT_502>;
type FragmentSelf502 = NonNullable<FragmentResult502>;

export type FragmentToken502 =
  | FragmentSelf502["__typename"]
  | FragmentSelf502["typenameHint"] | FragmentToken500 | FragmentToken501;
