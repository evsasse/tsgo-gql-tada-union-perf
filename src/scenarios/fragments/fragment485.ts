import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken483 } from "./fragment483";
import type { FragmentToken484 } from "./fragment484";

export const FRAGMENT_485 = gql(`
  fragment Fragment485 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult485 = ResultOf<typeof FRAGMENT_485>;
type FragmentSelf485 = NonNullable<FragmentResult485>;

export type FragmentToken485 =
  | FragmentSelf485["__typename"]
  | FragmentSelf485["typenameHint"] | FragmentToken483 | FragmentToken484;
