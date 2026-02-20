import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken667 } from "./fragment667";
import type { FragmentToken668 } from "./fragment668";

export const FRAGMENT_669 = gql(`
  fragment Fragment669 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult669 = ResultOf<typeof FRAGMENT_669>;
type FragmentSelf669 = NonNullable<FragmentResult669>;

export type FragmentToken669 =
  | FragmentSelf669["__typename"]
  | FragmentSelf669["typenameHint"] | FragmentToken667 | FragmentToken668;
